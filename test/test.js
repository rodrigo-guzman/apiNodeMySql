import { assert, expect } from "chai";
import chai from "chai";
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const url = 'http://localhost:3000'

describe('Insert a employee: ', () => {
    it('should insert a employee', async () => {
        let res = await chai.request(url)
        .post('/employees')
        .send({name: "Nombre Prueba", salary: "9999"})
        expect(res).to.have.status(200)
    })
})