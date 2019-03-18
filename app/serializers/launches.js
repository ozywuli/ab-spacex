import DS from 'ember-data';

/**
 * Returns JSON API shape
 * @param {object} attrs - attrs object
 * @param {object} type - type object
 * @returns {object}
 */
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
