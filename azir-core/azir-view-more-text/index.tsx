import React, { useState, useEffect } from "react";

import AzirTheme, { withAzir } from "azir-theme";
import { Text, View, StyleSheet } from "react-native";
import { useScreenDimensions } from "azir-helpers";
import { reset } from "expo/build/AR";

const LcViewMoreText: React.FC<Props> = props => {
  const {
    theme,
    numberOfLines: _numberOfLines,
    styles,
    children,
    viewMoreText,
    viewMoreStyle,
    viewLessText,
    viewLessStyle,
    renderRevealedFooter,
    renderTruncatedFooter,
    ...rest
  } = props;

  let trimmedTextHeight: number = null;
  let fullTextHeight: number = null;
  const __numberOfLines = _numberOfLines ? _numberOfLines : theme.SIZES.NUMBER_OF_LINES;
  const [isFulltextShown, setIsFulltextShown] = useState(true);
  const [numberOfLines, setNumberOfLines] = useState(__numberOfLines);
  const [shouldShowMore, setShouldShowMore] = useState(false);

  //in case user change mobile oriantation
  const onChangeScreenDimensions = data => {
    setNumberOfLines(__numberOfLines);
    setIsFulltextShown(true);
    setShouldShowMore(false);
  };
  const screenData = useScreenDimensions(onChangeScreenDimensions); //rerender in case user change mobile oriantation
  useEffect(() => {
    if (numberOfLines > 0) {
      //afterCollapse();
    } else {
      //afterExpand();
    }
  }, [numberOfLines]);

  const renderFullText = () => {
    if (isFulltextShown) {
      return (
        <View onLayout={onLayoutFullText} style={styles.fullTextWrapper}>
          <Text style={props.textStyle}>{props.children}</Text>
        </View>
      );
    }
    return null;
  };

  const renderViewMore = () => {
    const textStyles = [styles.text];
    textStyles.push(styles.footerText);
    viewMoreStyle && textStyles.push(viewMoreStyle);
    return (
      <Text style={textStyles} onPress={onPressMore}>
        {viewMoreText}
      </Text>
    );
  };
  const renderViewLess = () => {
    const textStyles = [styles.text];
    textStyles.push(styles.footerText);
    viewLessStyle && textStyles.push(viewLessStyle);
    return (
      <Text style={textStyles} onPress={onPressLess}>
        {viewLessText}
      </Text>
    );
  };
  const onPressMore = () => {
    setNumberOfLines(null);
  };

  const onPressLess = () => {
    setNumberOfLines(__numberOfLines);
  };
  const onLayoutTrimmedText = event => {
    const { height } = event.nativeEvent.layout;
    trimmedTextHeight = height;
    hideFullText();
  };
  const onLayoutFullText = event => {
    const { height } = event.nativeEvent.layout;
    fullTextHeight = height;
    hideFullText();
  };
  const hideFullText = () => {
    if (isFulltextShown && trimmedTextHeight && fullTextHeight) {
      setShouldShowMore(trimmedTextHeight < fullTextHeight);
      setIsFulltextShown(false);
    }
  };
  const renderFooter = () => {
    if (shouldShowMore === true) {
      if (numberOfLines > 0) {
        return renderTruncatedFooter ? renderTruncatedFooter(onPressMore) : renderViewMore();
      }
      return renderRevealedFooter ? renderRevealedFooter(onPressLess) : renderViewLess();
    }
    return null;
  };
  const getWrapperStyle = () => {
    if (isFulltextShown) {
      return styles.transparent;
    }
    return {};
  };

  return (
    <View style={getWrapperStyle()}>
      <View onLayout={onLayoutTrimmedText}>
        <Text style={[styles.text, props.textStyle]} numberOfLines={numberOfLines} {...rest}>
          {children}
        </Text>
        {renderFooter()}
      </View>
      {renderFullText()}
    </View>
  );
};

type Props = {
  style: any;
  numberOfLines: number;
  styles: any;
  renderTruncatedFooter: any;
  renderRevealedFooter: any;
  viewMoreText: string;
  viewMoreStyle: object;
  viewLessText: string;
  viewLessStyle: object;
  textStyle: any;
  theme: any;
};
LcViewMoreText.defaultProps = {
  numberOfLines: null,
  viewMoreText: "View More",
  viewMoreStyle: {},
  viewLessText: "View Less",
  viewLessStyle: {}
};
const styles = theme =>
  StyleSheet.create({
    text: {
      textAlign: theme.SETTINGS.RTL ? "right" : "left"
    },
    fullTextWrapper: {
      opacity: 0,
      position: "absolute",
      left: 0,
      top: 0
    },
    footerText: {
      color: theme.COLORS.THEME
    }
  });
export default withAzir(LcViewMoreText, styles);
