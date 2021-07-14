import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import ActiveUser from "./ActiveUser";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { signIn } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Navi() {

  const {userStatus} = useSelector(state => state.user)
  const dispatch = useDispatch()

  var user = {userId: 2, userType:1, userFirstName:"ahmet"} // gecici olarak giriş işleminden user gelecek

  const handleSingIn=(user)=>{
    dispatch(signIn(user))
    toast.success(`${user.userFirstName} giriş yapıldı`)
  }
  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Link to={`/`}><Menu.Item name="Ana Sayfa" as="a"></Menu.Item></Link>
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
