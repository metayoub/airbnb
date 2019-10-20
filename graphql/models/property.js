const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    listing_url:  String,
    name: {
        type:String,
        required: true
    },
    summary:   String,
    space:  String,
    description:  String,
    notes:  String,
    transit:  String,
    access:  String,
    interaction:  String,
    house_rules:  String,
    property_type:  String,
    room_type:  String,
    bed_type:  String,
    minimum_nights:  String,
    maximum_nights:  String,
    cancellation_policy:  String,
    last_scraped: Date,
    calendar_last_scraped: Date,
    first_review: Date,
    last_review: Date,
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    bathrooms: Number,
    amenities: Array,
    price: Number,
    weekly_price: Number,
    monthly_price: Number,
    cleaning_fee: Number,
    extra_people: Number,
    guests_included: Number,
    availability: Object,
    images: Object,
    host: Object,
    address: Object,
    review_scores: Object,
    reviews: Array,
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  });

module.exports = mongoose.model('property',propertySchema);