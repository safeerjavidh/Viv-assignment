export default function() {
  this.namespace = '/api';

  this.get('/bookreads', function() {
    return {
      data: [{
        type: 'bookreads',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          category: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
        }
      }, {
        type: 'bookreads',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
        }
      }, {
        type: 'bookreads',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          category: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
        }
      }]
    };
  });

  this.get('/todos', function() {
    return {
      data: [{
        type: 'todos',
        id: '1',
        attributes: {
         task:'Complete assignment 1',
         completed:true,
         taskno:1
        }
      }, {
        type: 'todos',
        id: '2',
        attributes: {
          task:'Complete assignment 2',
         completed:false,
         taskno:2
        }
      }, {
        type: 'todos',
        id: '3',
        attributes: {
          task:'Send it as mail',
         completed:false,
         taskno:3
        }
      }]
    };
  });

  this.delete('/todos/:id',function(){
    return ;
  });

}