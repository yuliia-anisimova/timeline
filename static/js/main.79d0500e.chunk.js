(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,function(e,t,n){e.exports={"events-list":"EventsList_events-list__oX-60","event-item":"EventsList_event-item__33CLO",description:"EventsList_description__1ub6l"}},function(e,t,n){e.exports={timeline:"Timeline_timeline__2YEcS",details:"Timeline_details__3PKIQ",title:"Timeline_title__1zGBX"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(5),c=n.n(a),s=(n(10),n(11),n(15)),m=n(2),l=n.n(m),d=n(0),u=l.a["events-list"],o=l.a["event-item"],j=l.a.description,p=function(e){var t=e.events;return Object(d.jsx)("ul",{className:u,children:t.map((function(e){var t=e.date,n=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"});return Object(d.jsxs)("li",{className:o,children:[Object(d.jsx)("p",{className:j,children:e.name}),Object(d.jsx)("p",{className:j,children:n})]},e.id)}))})},b=n(3),v=n.n(b),h=[{id:1,name:"Term Start 1",date:"2022-06-24T00:00:00.000Z"},{id:2,name:"Term Start 2",date:"2022-09-24T00:00:00.000Z"},{id:3,name:"Term Start 3",date:"2022-10-24T00:00:00.000Z"},{id:4,name:"Term Start 4",date:"2022-08-24T00:00:00.000Z"},{id:5,name:"Term Start 5",date:"2022-11-12T00:00:00.000Z"},{id:6,name:"Term Start 6",date:"2022-11-24T00:00:00.000Z"}];function _(e){return h.filter((function(t){return new Date(t.date).getMonth()===e}))}var O=["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e,t){return{id:Object(s.a)(),month:e,monthEvents:_(t)}})),T=v.a.timeline,f=v.a.details,x=v.a.title,S=function(){return Object(d.jsx)("article",{className:T,children:O.map((function(e){var t=e.id,n=e.month,i=e.monthEvents;return Object(d.jsxs)("div",{className:f,children:[Object(d.jsx)("p",{className:x,children:n}),Object(d.jsx)(p,{events:i})]},t)}))})},y=function(){return Object(d.jsx)("div",{className:"starter",children:Object(d.jsx)(S,{})})};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.79d0500e.chunk.js.map