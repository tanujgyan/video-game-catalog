import { AppUserAuth } from './app-user-auth';
export const Login_Mocks:AppUserAuth[]=[
    {
        userName: "tgyan",
        bearerToken: "023eebb2-eb37-43db-ad51-14788ac39e32",
        isAuthenticated: true,
        canAccessCatalog: true,
        canEditVideogame: false,
        canAddVideogame: false,
    },
    {
        userName: "pgyan",
        bearerToken: "0f0b8f6c-bc90-4295-8e55-8d90e8b872de",
        isAuthenticated: true,
        canAccessCatalog: true,
        canEditVideogame: true,
        canAddVideogame: true,
    }
];
