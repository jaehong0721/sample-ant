import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginForm, { login } from "../components/LoginForm";

let utils
let userNameInput;
let passwordInput;
let submitButton;

beforeEach(() => {
    utils = render(<LoginForm />);
    userNameInput = utils.getByLabelText('Username');
    passwordInput = utils.getByLabelText('Password');
    submitButton = utils.getByText('Submit');
})

describe('<LoginForm /> User Event Test', () => {
    it ('username과 userinput이 truthy이 있을 때 onFinish 호출', async () => {
        const spy = jest.spyOn(login, 'onSuccess');

        fireEvent.change(userNameInput, { target: { value: "jay" } })
        fireEvent.change(passwordInput, { target: { value: "1234"} })
        fireEvent.click(submitButton);

        await waitFor(() => { expect(spy).toHaveBeenCalled() } );
    });

    it ('username과 userinput이 falsy할 때 onFinish 호출', async () => {
        const spy = jest.spyOn(login, 'onFail');

        fireEvent.change(userNameInput, { target: { value: "" } })
        fireEvent.change(passwordInput, { target: { value: ""} })
        fireEvent.click(submitButton);

        await waitFor(() => { expect(spy).toHaveBeenCalled() } );
    });
    
    it ('username이 빈 값인 상태에서 submit 버튼 클릭', async () => {
        fireEvent.change(userNameInput, { target: { value: "" } })
        fireEvent.change(passwordInput, { target: { value: "1234"} })
        fireEvent.click(submitButton);
        
        await utils.findByText('Please input your username!');
    });

    it ('password가 빈 값인 상태에서 submit 버튼 클릭', async () => {
        fireEvent.change(userNameInput, { target: { value: "jay" } })
        fireEvent.change(passwordInput, { target: { value: ""} })
        fireEvent.click(submitButton);
        
        await utils.findByText('Please input your password!');
    });
});

describe('<LoginForm /> State Test', () => {
    it ('', () => {
    });
});