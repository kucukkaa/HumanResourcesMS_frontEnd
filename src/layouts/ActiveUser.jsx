import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ActiveUser() {
  const { userStatus } = useSelector((state) => state.user);
  var userName;
  var userType;

  userStatus.map((user) => 
  ((userName = user.userFirstName, 
    userType = user.userType))
  );

  return (
    <div>
      <Dropdown item text={userName}>
        <Dropdown.Menu>
          <Dropdown.Item>{userName}</Dropdown.Item>
          {userType === 2? <>  
          {/* to-do kullanıcı türüne göre düzenlenecek */}
             <Dropdown.Item>
             <Link to={`/jobadvertisement/add`} style={{color: 'black'}}>İş İlanı Ekle</Link>
           </Dropdown.Item>
           <Dropdown.Item>
           <Link to={`/jobadvertisementlistbyemployer`} style={{color: 'black'}}>İş İlanlarımı Görüntüle</Link>
         </Dropdown.Item>
         <Dropdown.Item>
           <Link to={`/updateemployer`} style={{color: 'black'}}>Profili Güncelle</Link>
         </Dropdown.Item>
          </> :<Dropdown.Item>
             <Link to={`/jobadvertisementapprove`} style={{color: 'black'}}>İş İlanı onayla</Link>
           </Dropdown.Item>
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
