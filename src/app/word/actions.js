"use server";

import { redirect } from "next/navigation";

export async function lookup(formData) {
  const word = formData.get("word");

  return redirect("/word/" + word);
}
