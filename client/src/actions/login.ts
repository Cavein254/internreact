import { redirect } from "react-router-dom";

export const loginAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data);
  return redirect("/auth");
};
