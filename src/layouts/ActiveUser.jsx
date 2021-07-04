import React from 'react'
import { Dropdown } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function ActiveUser() {

  const {userStatus} = useSelector(state => state.user)
  var userName;

  userStatus.map((user)=>(
    userName = user.userFirstName
  ))

    return (
        <div>
            <Dropdown item text={userName}>
              <Dropdown.Menu>
                {
                  userStatus.map((user)=>(
                    <Dropdown.Item>
                      {user.userFirstName}
                    </Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
