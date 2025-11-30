export type IRegisterPayload = Pick<
  z.infer<typeof registerSchema>,
  "name" | "email" | "password"
>;
