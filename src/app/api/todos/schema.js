import z from "zod";

export const validationSchema=z.object({
    title:z.string().min(3).max(20),
    staus:z.optional(z.enum(["todo", "in progress", "completed"]))

})