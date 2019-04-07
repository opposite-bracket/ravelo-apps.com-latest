describe('Users', () => {
  let validResponse;
  const validUser = {
    email: 'test@test.ca',
    password: 'letmin',
    firstName: 'Jane',
    lastName: 'Doe'
  };

  describe('Sign up', () => {

    describe('valid request', () => {
      before(async () => {
        validResponse = await Chai.request(App)
          .post('/ims/users/sign-up')
          .set('content-type', 'application/json')
          .send(validUser);
      });

      it('returns 200', () => {
        validResponse.should.have.status(200);
      });

      it('returns email', () => {
        validResponse.body.data.should.include({ email: validUser.email });
      });

      it('returns auth token', () => {
        validResponse.body.data.should.contain.keys('token');
      });
    });

    describe('Invalid request', () => {
      let response;
      const body = {
        email: 'test',
        password: 'letmein'
      };

      before(async () => {
        response = await Chai.request(App)
          .post('/ims/users/sign-up')
          .set('content-type', 'application/json')
          .send(body);
      });

      it('returns 404', () => {
        response.should.have.status(400);
      });
    });
  });

  describe('Sign in', () => {

    describe('Valid request', () => {
      let response;

      before(async () => {
        response = await Chai.request(App)
          .post('/ims/users/sign-in')
          .set('content-type', 'application/json')
          .send(validUser);
      });

      it('returns 200', () => {
        response.should.have.status(200);
      });

      it('returns email', () => {
        validResponse.body.data.should.include({ email: validUser.email });
      });

      it('returns auth token', () => {
        validResponse.body.data.should.contain.keys('token');
      });

      it('does not return password', () => {
        validResponse.body.data.should.not.contain.keys('password');
      });
    });

    describe('Invalid request', () => {
      let response;

      before(async () => {
        response = await Chai.request(App)
          .post('/ims/users/sign-in')
          .set('content-type', 'application/json')
          .send({
            email: validResponse.body.data.email,
            password: 'invalid password'
          });
      });

      it('returns 200', () => {
        response.should.have.status(400);
      });
    });
  });

  describe('Current Details', () => {

    describe('Valid request', () => {
      let response;

      before(async () => {
        response = await Chai.request(App)
          .get('/ims/users/current')
          .set('Authorization', `Bearer ${validResponse.body.data.token}`)
          .send();
      });

      it('returns 200', () => {
        response.should.have.status(200);
      });

      it('returns email', () => {
        response.body.data.should.include({ email: validUser.email });
      });

      it('returns auth token', () => {
        response.body.data.should.contain.keys('token');
      });

      it('does not return password', () => {
        response.body.data.should.not.contain.keys('password');
      });
    });

    describe('Invalid bearer key', () => {
      let response;

      before(async () => {
        response = await Chai.request(App)
          .get('/ims/users/current')
          .set('Authorization', `Bearer invalid`)
          .send();
      });

      it('returns 403', () => {
        response.should.have.status(403);
      });
    });

    describe('empty bearer key', () => {
      let response;

      before(async () => {
        response = await Chai.request(App)
          .get('/ims/users/current')
          .set('Authorization', `Bearer `)
          .send();
      });

      it('returns 403', () => {
        response.should.have.status(403);
      });
    });
  });
});