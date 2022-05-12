import { Controller } from "@hotwired/stimulus";
import StarRating from "star-rating.js"
import "star-rating.js/dist/star-rating.css"

export default class extends Controller {
  connect() {
    new StarRating(this.element);
  }
}
