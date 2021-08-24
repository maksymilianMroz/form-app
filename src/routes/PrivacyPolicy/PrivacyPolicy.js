import Text from "../../components/UI/Text/Text";

import classes from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => (
  <div className={classes.container}>
    <h1 className={classes.header}>Polityka prywatności</h1>
    <div className={classes.text}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere, arcu at ultricies tincidunt, neque magna fermentum ligula,
        auctor viverra sapien urna sit amet tortor. Nunc luctus tempor arcu,
        eget viverra risus aliquam vel. Etiam vulputate enim turpis. Nullam
        efficitur, mi nec condimentum tempor, diam est vehicula purus, eget
        maximus eros nisl et nibh. Suspendisse sapien lectus, posuere tempor
        risus sed, semper condimentum neque.
      </Text>
    </div>
    <div className={classes.text}>
      <Text>
        Aliquam erat volutpat. Phasellus sed ex odio. Vivamus tincidunt arcu at
        nibh congue cursus. Sed mi turpis, pretium id lacus eu, sollicitudin
        tristique nibh. Vestibulum at gravida enim. Nam sodales magna ligula.
        Vivamus viverra dui massa, vitae euismod nunc interdum ac. Ut
        sollicitudin eros tempus, semper libero at, sodales velit. Vestibulum
        interdum faucibus lacus vel tincidunt. Praesent ut quam quam. Donec
        mattis vestibulum augue ut accumsan. Praesent bibendum varius quam eu
        dignissim. Maecenas ornare commodo mi id tincidunt.
      </Text>
    </div>
  </div>
);

export default PrivacyPolicy;
