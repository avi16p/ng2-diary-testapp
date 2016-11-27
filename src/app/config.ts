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

    apiKey: "AIzaSyCeH8BzWIshKUl5UxhZ9sq3VcAxMF6NjVQ",
    authDomain: "mydiary-b1ed6.firebaseapp.com",
    databaseURL: "https://mydiary-b1ed6.firebaseio.com",
    storageBucket: "mydiary-b1ed6.appspot.com",
    messagingSenderId: "778071471224"

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
