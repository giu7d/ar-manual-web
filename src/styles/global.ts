import { createGlobalStyle } from "styled-components";

import { ITheme } from "../theme";

export default createGlobalStyle<{ theme: ITheme }>`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:root {
		font-size:  ${({ theme }) => `${theme.font.size}px`};
		font-family: ${({ theme }) => theme.font.family};
		color: ${({ theme }) => theme.colors.text};
		background-color: ${({ theme }) => theme.colors.background};
	}

	html,
	body,
	#root {
		height: 100%;
	}

	button {
		border: none;
		cursor: pointer;
		outline: none;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);

		::-moz-focus-inner {
			border: none;
		}
	}
`;
