/**
 * Created by idanhahn on 11/11/2016.
 */

interface AuthConfiguration{
  clientID: string,
  domain: string
}

export const authConfig: AuthConfiguration = {
  clientID: 'lQNO5AjOb9YtfZIJS8g2YApdBl3TVx6P', 
  domain: 'waycare.eu.auth0.com'
}

// DataBase configuration

export const firebaseConfig = {

};


export const appDefaults = {
	startType: 'Home',
	numEntriesToDisplay: 5,
};


// Additional configuration here

interface GenericConfiguration{
}

export const config: GenericConfiguration = {
}
