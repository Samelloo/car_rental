// import { auth } from "@clerk/nextjs/server";

// export const isAdmin = () => {
//   const { userId } = auth();

//   if (!userId) return false;

//   return process.env.ADMIN_ID === userId ? true : false;
// };

import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2h5w5vNbb9TDEnyStMKWq8bw210",
  "user_2hlLDeJKE3XfoNLCEJjc1hMydRu",
  "user_2gXTQQ9PVFeais25OaVTyVQH5ll",
  "user_2gXT28kAy6wKY3eV9IKNgescSos",
];
export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
