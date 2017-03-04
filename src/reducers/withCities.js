import cities from '../models/cities';
import Flickr from 'node-flickr'
const keys = {"api_key": "3ad6a7e064627c39b93ecaaed3fb40e4"}
const flickr = new Flickr(keys);

// function getFlickrPhoto(tag, cb) {
//   flickr.get("photos.search", {"tags": tag }, function(err, result){
//       if (err) return;
//       flickr.get("photos.getSizes", {"photo_id": result.photos.photo[0].id }, function(err, result) {
//         if (err) return console.error(err);
//           if (result.sizes.size[6]) {
//             console.log(result.sizes.size[6].source);
//             return result.sizes.size[6].source;
//           }
//         });
//   });
// }

const filteredCities = cities.map( city => {
  return {
    ...city,
    id: city.name,
    image: city.photo
  }
})

const INIT_STATE = {
    items: filteredCities
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
}


export default reducer;
