"use client";

import React from "react";
import { useUser } from "../../../../context/user";
import withProtected from "../../../../hoc/withProtected";
import AuthLayout from '../../../components/layout/Authanticated'

const Dashboard = () => {
  const user = useUser();
  const { email, uid } = user;
  return (
    <AuthLayout title='dashboard'>
      {/* row */}
      <div>
        {/* collumn 1 */}
        <div>
          <p>Email : {email}</p>
          <p>UID : {uid}</p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default withProtected(Dashboard);
// kita buat seperti ini karna withProtected itu menerima parametter page untuk authentikasi nya , jadi halaman ini jika belum login 
// dan kita paksa untuk akses halaman ini maka akan redirect ke halaman login
