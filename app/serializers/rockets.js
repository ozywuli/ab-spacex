import DS from 'ember-data';

/**
 * Returns JSON API shape
 * @param {object} attrs - attrs object
 * @param {object} type - type object
 * @returns {object}
 */
function mapRockets(attrs, type) {
  return {
    id: `${attrs.rocket_id}`,
    type: type.modelName,
    attributes: {
      noId: attrs.id,
      title: attrs.rocket_name,
      imgUrl: attrs.flickr_images[0],
      articleLink: attrs.wikipedia,
      description: attrs.description,
    }
  }
}

export default DS.JSONAPISerializer.extend({
  normalizeFindAllResponse(store, type, payload) {
    return {
      data: payload.map(attrs => mapRockets(attrs, type))
    }
  },
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: mapRockets(payload, type)
    }
  },
});
