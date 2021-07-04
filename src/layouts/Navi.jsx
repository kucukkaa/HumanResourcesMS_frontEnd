import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import ActiveUser from "./ActiveUser";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { signIn } from "../store/actions/userActions";
import { toast } from "react-toastify";

export default function Navi() {

  const {userStatus} = useSelector(state => state.user)
  const dispatch = useDispatch()

  var user = {userType:1, userFirstName:"ahmet"}

  const handleSingIn=(user)=>{
    dispatch(signIn(user))
    toast.success(`${user.userFirstName} giriş yapıldı`)
  }
  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
              {userStatus.length>0&&<ActiveUser/>}
            <Menu.Item>
              <Button onClick={()=>handleSingIn(user)} primary>Giriş Yap</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
