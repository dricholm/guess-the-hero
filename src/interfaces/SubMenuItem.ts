export default interface SubMenuItem {
  to: string | { name: string };
  name: string;
  exact?: boolean;
}
