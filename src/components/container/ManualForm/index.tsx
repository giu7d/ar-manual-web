import React, { useCallback, useState, useLayoutEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { observer } from "mobx-react";
import { useTheme } from "styled-components";
import { v4 as uuid } from "uuid";
import { toJS } from "mobx";

import { Wrapper } from "./styles";
import { Required } from "../../fragments/Input";
import { Manual } from "../../../models/Manual";
import { useStores } from "../../../hooks/useStores";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { IconButton } from "../../fragments/Buttons/IconButton";
import { InstructionCard } from "../../fragments/InstructionCard";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { ValidationError } from "yup";
import { ManualSchema } from "./validation";
import { useManual } from "../../../hooks/useManual";
import { useHistory } from "react-router-dom";
import { Warning } from "../../fragments/Warning";

const createNewManual = () =>
  new Manual({
    componentSerialNumber: "",
    testBenchSerialNumber: "",
    instructions: [],
  });

const createEmptyManualErrors = () => ({
  componentSerialNumber: undefined,
  testBenchSerialNumber: undefined,
  instructions: undefined,
  "thumbnail.src": undefined,
});

export const ManualForm: React.FC<{ externalManual?: Manual }> = observer(
  ({ externalManual }) => {
    const route = useHistory();
    const theme = useTheme();
    const { createManual, editManual } = useManual();
    const { globalStore, manualManagerStore } = useStores();
    const [manual, setManual] = useState(externalManual || createNewManual());
    const [error, setError] = useState(createEmptyManualErrors());
    const [httpError, setHTTPError] = useState<Error>();

    useLayoutEffect(() => {
      manualManagerStore.clearInstruction();
    }, [manualManagerStore]);

    const handleMovement = (movement: "up" | "down", step: number) => {
      manualManagerStore.switchInstructionStep(
        step,
        movement === "up" ? step - 1 : step + 1
      );
    };

    const handleUpload = useCallback((key: string, files: File[]) => {
      setManual((state) => ({
        ...state,
        [key]: {
          id: uuid(),
          src: files[0].name,
          file: files[0],
        },
      }));
    }, []);

    const handleClearUpload = useCallback((key: string) => {
      setManual((state) => ({
        ...state,
        [key]: undefined,
      }));
    }, []);

    const handleInput = useCallback((key: string, value: string) => {
      setManual((state) => ({
        ...state,
        [key]: value,
      }));
    }, []);

    const handleSubmit = async () => {
      setError(createEmptyManualErrors());
      setHTTPError(undefined);

      try {
        const data = {
          ...manual,
          instructions: toJS(manualManagerStore.instructions),
        };
        await ManualSchema.validate(data, {
          abortEarly: false,
        });

        if (!externalManual) {
          await createManual(data);
        } else {
          await editManual(data);
        }

        route.goBack();
      } catch (error) {
        if (error instanceof ValidationError) {
          error.inner.forEach(({ path = "", message }) =>
            setError((state) => ({
              ...state,
              [path]: message,
            }))
          );
        } else {
          setHTTPError(error);
        }
      }
    };

    const handleCancel = () => {
      route.goBack();
    };

    return (
      <>
        {httpError && (
          <Warning
            title="Error on saving the manual!"
            description={httpError.message}
          />
        )}
        <Wrapper>
          <div className="header">
            <div>
              <Typography.Title>
                {!externalManual ? "Create" : "Edit"} Manual
              </Typography.Title>
              <Typography.SubTitle>
                Complete the form below to create a new manual.
              </Typography.SubTitle>
            </div>
            <div>
              <NavigationButton onClick={handleCancel}>Cancel</NavigationButton>
              <NavigationButton onClick={handleSubmit} selected>
                Save
              </NavigationButton>
            </div>
          </div>

          <div className="general-form">
            <FormInput
              required
              label="Component Series"
              error={error.componentSerialNumber}
              inputProps={{
                placeholder: "Component identification series",
                value: manual.componentSerialNumber,
                onChange: (e) =>
                  handleInput("componentSerialNumber", e.target.value),
              }}
            />
            <FormInput
              required
              label="Test Bench Series"
              error={error.testBenchSerialNumber}
              inputProps={{
                required: true,
                placeholder: "Test bench identification series",
                value: manual.testBenchSerialNumber,
                onChange: (e) =>
                  handleInput("testBenchSerialNumber", e.target.value),
              }}
            />
            <FormUpload
              required
              label="Component Thumbnail"
              subLabel="Add the component thumbnail image in .png or .jpeg format."
              error={error["thumbnail.src"] && "Thumbnail is a required field"}
              accept={["image/jpeg", "image/png"]}
              limit={1}
              files={manual.thumbnail ? [manual.thumbnail] : undefined}
              onChange={(files) => handleUpload("thumbnail", files)}
              onRemove={() => handleClearUpload("thumbnail")}
            />

            {/* <Typography.SectionTitle>
            Operator Autocontrole Cycle
          </Typography.SectionTitle>
          <Typography.SubTitle>
            Create the operator autocontrole available operations.
          </Typography.SubTitle>

          <FormInput
            label="Description"
            inputProps={{
              placeholder: "...",
            }}
          /> */}
          </div>

          <div className="instructions-form">
            <Typography.SectionTitle>
              Instructions <Required>*</Required>
            </Typography.SectionTitle>
            <Typography.SubTitle>
              Create and order the instructions in the correct order.
            </Typography.SubTitle>
            {error.instructions && (
              <Typography.Warning>{error.instructions}</Typography.Warning>
            )}
            <div className="instructions">
              <IconButton
                onClick={() => {
                  manualManagerStore.setSelectedInstructionId(undefined);
                  globalStore.setBottomSheet(true);
                }}
                style={{ color: theme.colors.primary }}
              >
                <FiPlus size={24} />
              </IconButton>

              {manualManagerStore.instructions.map((instruction) => (
                <InstructionCard
                  key={uuid()}
                  step={instruction.step}
                  title={instruction.title}
                  description={instruction.description}
                  imageBadge={instruction.images.length}
                  animationBadge={instruction.animations.length}
                  onMovement={handleMovement}
                  onEdit={() => {
                    manualManagerStore.setSelectedInstructionId(instruction.id);
                    globalStore.setBottomSheet(true);
                  }}
                  onRemove={() => {
                    manualManagerStore.deleteInstruction(instruction.id);
                  }}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
);
