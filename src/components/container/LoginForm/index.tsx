import { observer } from "mobx-react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useStores } from "../../../hooks/useStores";
import { useAccount } from "../../../hooks/useAccount";
import {
  authenticateAccount,
  fetchLatestTestBench,
} from "../../../services/api";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { FormInput } from "../../fragments/Form/FormInput";
import { Wrapper, FormWrapper } from "./styles";

const { REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env;

export const LoginForm = observer(() => {
  const [form, setForm] = useState({
    email: REACT_APP_USERNAME || "",
    password: REACT_APP_PASSWORD || "",
  });
  const { globalStore } = useStores();
  const { setAccount } = useAccount();

  const handleInput = (key: string, event: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = await authenticateAccount(form.email, form.password);

    const latestTestBench = await fetchLatestTestBench();

    if (latestTestBench) {
      globalStore.setSelectedTestBenchId(latestTestBench.id);
    }

    setAccount("G", data.token);
  };

  return (
    <Wrapper>
      <h3 className="header">Log In</h3>
      <FormWrapper onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputProps={{
            value: form.email,
            onChange: (e) => handleInput("email", e),
            placeholder: "you@domain.com",
          }}
        />
        <FormInput
          label="Password"
          inputProps={{
            value: form.password,
            onChange: (e) => handleInput("password", e),
            placeholder: "*********",
            type: "password",
          }}
        />
        <NavigationButton className="actions" type="submit" selected>
          Enter
        </NavigationButton>
      </FormWrapper>
    </Wrapper>
  );
});
