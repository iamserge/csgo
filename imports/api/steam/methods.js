import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SteamApi from 'steam-api';
const SteamUser = new SteamApi.User(process.env.STEAM_API_KEY);
/*
export const getUserInfo = new ValidatedMethod({
  name: 'steam.getUserInfo',
  validate: new SimpleSchema({
    name: { type: String },
  }).validator(),
  run({ name }) {
    console.log('here');
  
    return SteamUser.ResolveVanityUrl(name).done((res) => {
      console.log(res);
      return res;
    });

  },
});

*/
Meteor.methods({
  'steam.getUserId': async (id) => {
    check(id, String)
    return await SteamUser.ResolveVanityUrl(id);
  },

  'steam.getUserInfo': async (params) => {
    check(params, Object)
    check(params.name, String);
    const id = await SteamUser.ResolveVanityUrl(params.name);
    return await SteamUser.GetPlayerSummaries(id);
  }
});