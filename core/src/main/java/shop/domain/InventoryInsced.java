package shop.domain;

import java.util.*;
import lombok.*;
import shop.domain.*;
import shop.infra.AbstractEvent;

@Data
@ToString
public class InventoryInsced extends AbstractEvent {

    private Long id;
    private Integer quantity;
}
