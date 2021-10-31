export class RoutesConstants {
    public static readonly HOME_URL = '/home';
    public static readonly PRODUCTS_URL = '/products';
    public static readonly PRODUCTS_CREATE_URL = `${RoutesConstants.PRODUCTS_URL}/create`;
    public static readonly PRODUCTS_UPDATE_URL = `${RoutesConstants.PRODUCTS_URL}/update/:id`;
    public static readonly PRODUCTS_DELETE_URL = `${RoutesConstants.PRODUCTS_URL}/delete/:id`;

}