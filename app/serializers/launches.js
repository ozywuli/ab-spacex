import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindAllResponse(store, type, payload) {
    return {
      data: payload.map(attrs => (
        {
          id: attrs.flight_number,
          type: type.modelName,
          attributes: {
            title: attrs.mission_name,
            imgUrl: attrs.links.mission_patch,
            articleLink: attrs.links.article_link,
            description: attrs.details,
          }
        }
      ))
    }
  },
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: `${payload.flight_number}`,
        type: type.modelName,
        attributes: {
          title: payload.mission_name,
          imgUrl: payload.links.mission_patch,
          articleLink: payload.links.article_link,
          description: payload.details,
        }
      }
    }
  },
});
