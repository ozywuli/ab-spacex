export default function() {
  this.passthrough('https://api.spacexdata.com/v3/launches');
  this.passthrough('https://api.spacexdata.com/v3/launches/:id');
  this.passthrough('https://api.spacexdata.com/v3/rockets');
  this.passthrough('https://api.spacexdata.com/v3/rockets/:id');

  this.get('/launches/:id/comments', function(schema, request) {
    let id = request.params.id;
    return {
      data: {
        type: 'comments',
        id,
        attributes: schema.comments.find(id)
      }
    };
  });

  this.get('/rockets/:id/comments', function(schema, request) {
    return schema.rocketsComments.find(request.params.id);
  });
}
