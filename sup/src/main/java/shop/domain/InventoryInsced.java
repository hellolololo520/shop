package shop.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import shop.domain.*;
import shop.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class InventoryInsced extends AbstractEvent {

    private Long id;
    private Integer quantity;

    public InventoryInsced(Inventory aggregate) {
        super(aggregate);
    }

    public InventoryInsced() {
        super();
    }
}
//>>> DDD / Domain Event
