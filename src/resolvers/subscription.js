// Subscription
import {subscriptions as userSubscriptions} from "../bus/users/subscriptions"
import {subscriptions as bookSubscriptions} from "../bus/books/subscriptions"

export const Subscription = {
  ...userSubscriptions,
  ...bookSubscriptions,
}
