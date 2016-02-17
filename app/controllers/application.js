import Ember from 'ember';
import appStore from './../models/app-store';

var pageNameObj = {
	home: 'home',
	profile: 'profile',
	promote: 'promote'
};

export default Ember.Controller.extend({
	isLoginTrue: false,
	isHomeActive: true,
	isProfileActive: false,
	isPromoteActive: false,
	activatePage: function (pageName) {
		this.set('isHomeActive', pageName === pageNameObj.home);
		this.set('isProfileActive', pageName === pageNameObj.profile);
		this.set('isPromoteActive', pageName === pageNameObj.promote);
		console.log('this',this);
	},
	actions: {
		homeBtnClicked(){
			// this.transitionTo('mainPage');
			this.activatePage(pageNameObj.home);
		},
		profileBtnClicked(){
			if(!this.isLoginTrue){
				return;
			}
			// this.transitionTo('mainPage');
			this.activatePage(pageNameObj.profile);
		},
		promoteBtnClicked(){
			if(!this.isLoginTrue){
				return;
			}
			// this.transitionTo('mainPage');
			this.activatePage(pageNameObj.promote);
		}
	}
});
