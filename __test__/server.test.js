const request = require('supertest')
const app = require('../app')
var testData = {
    "testimonialId": 3,
    "photo": "dipeshPhoto",
    "name": "Dipesh",
    "post": "CEO",
    "description": "Test description edited ",
    "createdOn": "20/09/2022",
    "lastUpdated": "20/09/2022",
    "active": 0
}

describe('testimonial Endpoints', () => {
    var size;
    it('should add post', async () => {
        await request(app).post("/testimonial/add" )
        .send(testData)
        .expect(201)
        .then((response) => { 
          expect(response.body).toHaveProperty('post')
          expect(response.body.testimonialId).toBe(testData.testimonialId);
        });
      })
   it('should get post', async () => {
    await request(app).get("/testimonial/get" )
    .expect(200)
    .then((response) => { 
        size = response.body.length;
        expect(size).toBeGreaterThan(0);
    //   expect(response.body.title).toBe(post.title);
    //   expect(response.body.content).toBe(post.content);
    });

  })

  it('should update post', async () => {
    var editdata = testData
    editdata.description = "updated"
    await request(app).put('/testimonial/edit/'+testData.testimonialId +"" )
    .send(editdata)
    .expect(200)
    .then((response) => { 
        expect(response.body.description).toBe(editdata.description);
    });
    })

   it('should delete post', async () => {
        await request(app).delete('/testimonial/delete/'+testData.testimonialId +"" )
        .expect(200)
        .then((response) => { 

        });

  })

  it('after delete get post', async () => {
    await request(app).get("/testimonial/get" )
    .expect(200)
    .then((response) => { 
        expect(response.body.length).toBeLessThan(size);

    });

  })

})