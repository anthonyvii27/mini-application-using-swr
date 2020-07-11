import styled from 'styled-components';

export const Screen = styled.div`
  padding: 20px;

  ul {
    list-style: none;
  }

  li {    
    width: 300px; 
    height: 60px;
    padding: 10px;
    margin-bottom: 5px;
    background: #E5E5E5;
    border-radius: 5px;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;

    div {
      h1 {
        font-size: 13pt;
      }

      button {
        float: right;
        margin-top: -10px;

        img {
          width: 20px;          
        }
      }

      a {
        text-decoration: none; 
        color: #555;
      }

      a:hover {
        color: #222;
        transition: .4s;
      }
    }
  }  

  input {
    padding: 7px;
    margin-bottom: 50px;
    width: 300px;
  }
`
