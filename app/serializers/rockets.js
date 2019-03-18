import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindAllResponse(store, type, payload) {
    return {
      data: payload.map(attrs => (
        {
          type: 'rockets',
          id: attrs.rocket_id,
          attributes: {
            title: attrs.rocket_name,
            imgUrl: attrs.flickr_images[0],
            articleLink: attrs.wikipedia,
            description: attrs.description,
          }
        }
      ))
    }
  },
});
