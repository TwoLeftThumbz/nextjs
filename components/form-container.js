import TopBarContainer from "./top-bar-container";
import KeyboardsContainer from "./keyboards-container";
import styles from "./form-container.module.css";

const FormContainer = () => {
  return (
    <div className={styles.autoLayout}>
      <TopBarContainer />
      <KeyboardsContainer />
    </div>
  );
};

export default FormContainer;
