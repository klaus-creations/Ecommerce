import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import userModel from "../models/users.model";

import bcrypt from "bcryptjs";

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await userModel.findOne({ email });
        if (!user)
          return done(null, false, { message: "Incorrect Email or Password" });

        const isPasswordSame = await bcrypt.compare(password, user.password);
        if (!isPasswordSame)
          return done(null, false, { message: "Incorrect password" });

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, (user as any)._id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await userModel.findOne({ _id: userId });

    if (!user) {
      return done(new Error("User not found"));
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
});
