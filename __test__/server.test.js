const request = require('supertest')
const app = require('../src/api')
var testData = {
    "image": "image",
    "name": "Dipesh",
    "post": "CEO",
    "description": "Test description edited ",
    "active": 1
}

describe('testimonial Endpoints', () => {
    var size;
    var id 
    it('should add post', async () => {
        await request(app).post("/.netlify/functions/api/add" )
        .send(testData)
        .expect(201)
        .then((response) => { 
          expect(response.body).toHaveProperty('post')
          expect(response.body).toHaveProperty('_id')
          id = response.body.testimonialId;
        });
      })
   it('should get post', async () => {
    await request(app).get("/.netlify/functions/api/get" )
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
    await request(app).put('/.netlify/functions/api/edit/'+id +"" )
    .send(editdata)
    .expect(200)
    .then((response) => { 
       
    });
    })

   it('should delete post', async () => {
        await request(app).delete('/.netlify/functions/api/delete/'+id+"" )
        .expect(200)
        .then((response) => { 

        });

  })

  // it('after delete get post', async () => {
  //   await request(app).get("/testimonial/get" )
  //   .expect(200)
  //   .then((response) => { 
  //       expect(response.body.length).toBeLessThan(size);
  //   });
  // })

})