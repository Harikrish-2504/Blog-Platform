import React, {useState} from "react";
import moment from 'moment'
const Blogentry = ({data}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

    const date = moment().format('MMMM Do YYYY, h:mm:ss a');


  return (
    <div className="w3-card-4 w3-margin w3-white">
      <img
        src={
          data.image ||
          "https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1432821596592-e2c18b78144f%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dblog%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8YmxvZ3xlbnwwfHx8fDE3MjA0MDAzMzl8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60"
        }
        alt="Nature"
        style={{width: "100%",maxHeight:"500px"}}
      />
      <div className="w3-container">
        <h2 className="m-0 py-3 ">
          <b>{data.title || "Title Heading"}</b>
        </h2>
        <h5>
          Blog Created <span className="w3-opacity"> {data.date  || date }</span>
        </h5>
      </div>
      <div className="w3-container">
        <p>
          {data.description
            ? isExpanded
              ? data.description
              : `${data.description.split(" ").slice(0, 25).join(" ")}...`
            : "Enter description"}
        </p>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button onClick={toggleExpand} className="w3-button w3-padding-large w3-white w3-border">
                <b>{isExpanded ? "READ LESS »" : "READ MORE »"}</b>
              </button>
            </p>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p>
              <span className="w3-padding-large w3-right">
                <b>Comments &nbsp;</b> <span className="w3-tag">{data.comments || "0"}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogentry;
