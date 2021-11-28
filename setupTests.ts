/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import * as styledSystem from "styled-system";
jest.mock("styled-system");

//@ts-ignore
styledSystem.theme = jest.fn().mockImplementation((k) => k);
import "@testing-library/jest-dom";
