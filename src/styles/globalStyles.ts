import { StyleSheet } from 'react-native';
import { appColor } from '../constants/appColor';
import { fontFamily } from '../constants/fontFamily';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: appColor.text,
  },
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.primary,
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: appColor.white,
    borderRadius: 100,
    marginRight: 12,
  },
  card: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: appColor.white,
    margin: 12,
  },
});
