import z from "zod";
export const registerschema=z.object({
    name:z.string().min(3,"string 3 must contain 3 letters"),
    email:z.string().email("give the proper email format"),
    age:z.coerce.number().min(18,"age must be above or equale to 18"),
    password:z.string().min(8,"password must contain eqale or greater than 8 charater")

})