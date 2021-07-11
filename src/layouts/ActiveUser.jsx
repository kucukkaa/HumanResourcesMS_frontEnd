import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ActiveUser() {
  const { userStatus } = useSelector((state) => state.user);
  var userName;
  var userType;

  userStatus.map(
    (user) => ((userName = user.userFirstName), (userType = user.userType))
  );

  return (
    <div>
      <Dropdown item text={userName}>
        <Dropdown.Menu>
          <Dropdown.Item>{userName}</Dropdown.Item>
          {userType === 2 && (
            <Dropdown.Item>
              <Link to={`/jobadvertisement/add`}>İş İlanı Ekle</Link>
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
