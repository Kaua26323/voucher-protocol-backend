import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { RegisterVoucherController } from "./controllers/voucher/RegisterVoucherController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { IsAuthController } from "./controllers/user/IsAuthController";
import { ListRegisteredVouchersController } from "./controllers/voucher/ListRegisteredVouchersController";
import { DeleteVoucherController } from "./controllers/voucher/DeleteVoucherController";




const router = Router();

// User Routes
router.post("/create-user",new CreateUserController().handle);
router.post("/login", new AuthUserController().handle);
router.get("/user-details", isAuthenticated, new DetailsUserController().handle);
router.get("/isAuth", isAuthenticated, new IsAuthController().handle);


// Voucher Routes
router.post("/register-voucher", isAuthenticated, new RegisterVoucherController().handle);
router.get("/get-vouchers", isAuthenticated, new ListRegisteredVouchersController().handle);
router.delete("/delete-voucher/:id", isAuthenticated, new DeleteVoucherController().handle);

export { router }; 