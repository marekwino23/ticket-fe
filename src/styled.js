import styled from 'styled-components'

const Container = styled.div` 
    max-width: 140rem;
    margin: 0 auto;
`

const Form = styled.form`
    width: 40rem;
    margin: 1rem auto;
    padding: 1rem 1.5rem;
    label, button {
      display: block;
      text-align: center;
      width: 100%;
    }
    label input {
      width: 100%;
      height: 2.5rem;
    }
    button {
      margin-top: 1rem;
    }
`

const Btn = styled.button`   
  border: none;
  padding: 1rem 2rem;
  background-color: #349bf3;
  box-shadow: 1px 2px 10px rgba(25,25,25,.4);
  display: flex;
  cursor: pointer;
  color: #f5f5f5;
  &:disabled {
    background-color: #0461b0;;
  }
  `
  export {Btn, Container, Form}