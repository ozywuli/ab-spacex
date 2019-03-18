import DS from 'ember-data';

function mapLaunches(attrs, type) {
  return {
    id: `${attrs.flight_number}`,
    type: type.modelName,
    attributes: {
      title: attrs.mission_name,
      imgUrl: attrs.links.mission_patch,
      articleLink: attrs.links.article_link,
      description: attrs.details,
    }
  }
}

export default DS.JSONAPISerializer.extend({
  normalizeFindAllResponse(store, type, payload) {
    return {
      data: payload.map(attrs => mapLaunches(attrs, type))
    }
  },
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: mapLaunches(payload, type)
    }
  },
});
