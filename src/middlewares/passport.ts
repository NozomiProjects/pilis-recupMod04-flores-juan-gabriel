// passport.ts
import { User } from "../entity/User";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'somesecrettoken'
};

export default new Strategy(opts, async (payload, done) => {
    try {
        const user = await User.findOneBy({ id: parseInt(payload.id) });
        if (user) {
            return done(null, user);
        }
        console.log('Usuario no encontrado en passport.ts');
        return done(null, false);
    } catch (error) {
        console.log('Error en passport.ts:', error);
        return done(error, false);
    }
});
