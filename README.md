# SaveThePlate!

An app aimed at reducing food waste while maximising restaurant profits! 

Developed by D3 students at BCIT.

##Preview

Customer Main Page | Restaurant Main Page | New Menu Item

<img src="/gifs/customer.gif"> | <img src="/gifs/listing.gif"> | <img src="/gifs/upload.gif">

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
