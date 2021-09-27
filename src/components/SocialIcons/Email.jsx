import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Email = ({ userName }) => (
  <CircleIcon href={`mailto:${userName}`} iconName="EnvelopIcon" />
);

Email.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Email;
