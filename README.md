# SaveThePlate!

An app aimed at reducing food waste while maximizing restaurant profits! 

This is a project I worked on during my time in BCIT. I was responsible for creating the login functions for both the restaurant and customer side. I also primarily worked on the restaurant side. This includes functions like creating new items in the database, uploading images, and mapping data and images according to the restuarant logged in.

Developed by D3 students at BCIT.

##Preview

Customer Main Page | Restaurant Main Page | New Menu Item
:-------------------------:|:-------------------------:|:-------------------------:
<img src="/gifs/customer.gif" width="200" height="433" > | <img src="/gifs/listing.gif" width="200" height="433"> | <img src="/gifs/upload.gif" width="200" height="433">

### Naming Conventions

__Branch Naming__

 * Just your first name in lowercase.



__Component Naming__

 * Capitilize the first letter of every word, no spaces, underscores or dashes

 * ComponentName



__Props__

- ${props=>props.name}

```
const CardCont = styled.View
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: ${props=>props.height};
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 10px;

```
