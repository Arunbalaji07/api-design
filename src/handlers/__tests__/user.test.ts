// unit testing

import {describe} from "node:test";
import * as user from '../user'

describe('user handler', () => {
    it('it should create a new user', async () => {
        const req = {body: {"username": "arun", "password": "admin"}}
        const res = {json({token}) {
            expect(token).toBeTruthy()
        }}
        await user.createNewUser(req,res, () => {})
    })
})